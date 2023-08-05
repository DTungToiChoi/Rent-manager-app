package com.cntt.rentalmanagement.services.impl;

import com.cntt.rentalmanagement.domain.enums.LockedStatus;
import com.cntt.rentalmanagement.domain.enums.RoomStatus;
import com.cntt.rentalmanagement.domain.models.*;
import com.cntt.rentalmanagement.domain.payload.request.AssetRequest;
import com.cntt.rentalmanagement.domain.payload.request.RoomRequest;
import com.cntt.rentalmanagement.domain.payload.response.MessageResponse;
import com.cntt.rentalmanagement.domain.payload.response.RoomResponse;
import com.cntt.rentalmanagement.exception.BadRequestException;
import com.cntt.rentalmanagement.repository.*;
import com.cntt.rentalmanagement.services.BaseService;
import com.cntt.rentalmanagement.services.FileStorageService;
import com.cntt.rentalmanagement.services.RoomService;
import com.cntt.rentalmanagement.utils.MapperUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RoomServiceImpl extends BaseService implements RoomService {
    private final RoomRepository roomRepository;
    private final UserRepository userRepository;
    private final LocationRepository locationRepository;
    private final FileStorageService fileStorageService;
    private final RoomMediaRepository roomMediaRepository;
    private final CategoryRepository categoryRepository;
    private final AssetRepository assetRepository;
    private final MapperUtils mapperUtils;

    @Override
    public MessageResponse addNewRoom(RoomRequest roomRequest) {
        Location location = locationRepository.
                findById(roomRequest.getLocationId()).orElseThrow(() -> new BadRequestException("Thành phố chưa tồn tại."));
        Category category = categoryRepository.findById(roomRequest.getCategoryId())
                .orElseThrow(() -> new BadRequestException("Danh mục không tồn tại"));
        Room room = new Room(
                roomRequest.getTitle(),
                roomRequest.getDescription(),
                roomRequest.getPrice(),
                roomRequest.getLatitude(),
                roomRequest.getLongitude(),
                roomRequest.getAddress(),
                getUsername(),
                getUsername(),
                location,
                category,
                getUser(),
                roomRequest.getStatus());
        roomRepository.save(room);
        for (MultipartFile file : roomRequest.getFiles()) {
            String fileName = fileStorageService.storeFile(file);
            RoomMedia roomMedia = new RoomMedia();
            roomMedia.setFiles(fileName);
            roomMedia.setRoom(room);
            roomMediaRepository.save(roomMedia);
        }

        for (AssetRequest asset: roomRequest.getAssets()) {
            Asset a = new Asset();
            a.setRoom(room);
            a.setName(asset.getName());
            a.setNumber(asset.getNumber());
            assetRepository.save(a);
        }
        return MessageResponse.builder().message("Thêm tin phòng thành công").build();
    }

    @Override
    public Page<RoomResponse> getRoomByRentaler(String title, Integer pageNo, Integer pageSize) {
        int page = pageNo == 0 ? pageNo : pageNo - 1;
        Pageable pageable = PageRequest.of(page, pageSize);
        return mapperUtils.convertToResponsePage(roomRepository.searchingRoom(title, getUserId() ,pageable),RoomResponse.class,pageable);
    }

    @Override
    public RoomResponse getRoomById(Long id) {
        return mapperUtils.convertToResponse(roomRepository.findById(id).orElseThrow(() ->
                new BadRequestException("Phòng trọ này không tồn tại.")), RoomResponse.class);
    }

    @Override
    public MessageResponse disableRoom(Long id) {
        Room room = roomRepository.findById(id).orElseThrow(() -> new BadRequestException("Thông tin phòng không tồn tại."));
        room.setIsLocked(LockedStatus.DISABLE);
        roomRepository.save(room);
        return MessageResponse.builder().message("Bài đăng của phòng đã được ẩn đi.").build();
    }

    @Override
    @Transactional
    public MessageResponse updateRoomInfo(Long id, RoomRequest roomRequest) {
        Room room = roomRepository.findById(id).orElseThrow(() -> new BadRequestException("Thông tin phòng không tồn tại."));
        Location location = locationRepository.
                findById(roomRequest.getLocationId()).orElseThrow(() -> new BadRequestException("Thành phố chưa tồn tại."));
        Category category = categoryRepository.findById(roomRequest.getCategoryId())
                .orElseThrow(() -> new BadRequestException("Danh mục không tồn tại"));
        room.setUpdatedBy(getUsername());
        room.setTitle(roomRequest.getTitle());
        room.setDescription(roomRequest.getDescription());
        room.setPrice(roomRequest.getPrice());
        room.setLatitude(roomRequest.getLatitude());
        room.setLongitude(roomRequest.getLongitude());
        room.setAddress(roomRequest.getAddress());
        room.setUpdatedBy(getUsername());
        room.setLocation(location);
        room.setCategory(category);
        room.setStatus(roomRequest.getStatus());
        roomRepository.save(room);

        roomMediaRepository.deleteAllByRoom(room);
        for (MultipartFile file : roomRequest.getFiles()) {
            String fileName = fileStorageService.storeFile(file);
            RoomMedia roomMedia = new RoomMedia();
            roomMedia.setFiles(fileName);
            roomMedia.setRoom(room);
            roomMediaRepository.save(roomMedia);
        }

        assetRepository.deleteAllByRoom(room);
        for (AssetRequest asset: roomRequest.getAssets()) {
            Asset a = new Asset();
            a.setRoom(room);
            a.setName(asset.getName());
            a.setNumber(asset.getNumber());
            assetRepository.save(a);
        }
        return MessageResponse.builder().message("Cập nhật thông tin thành công").build();
    }

    private User getUser() {
        return userRepository.findById(getUserId()).orElseThrow(() -> new BadRequestException("Người dùng không tồn tại"));
    }
}
