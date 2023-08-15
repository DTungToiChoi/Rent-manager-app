package com.cntt.rentalmanagement.services;

import com.cntt.rentalmanagement.domain.payload.request.RoomRequest;
import com.cntt.rentalmanagement.domain.payload.response.MessageResponse;
import com.cntt.rentalmanagement.domain.payload.response.RoomResponse;
import org.springframework.data.domain.Page;

public interface RoomService {

    MessageResponse addNewRoom(RoomRequest roomRequest);

    Page<RoomResponse> getRoomByRentaler(String title, Integer pageNo, Integer pageSize);

    RoomResponse getRoomById(Long id);

    MessageResponse disableRoom(Long id);

    MessageResponse updateRoomInfo(Long id, RoomRequest roomRequest);

    Page<RoomResponse> getRentOfHome();

    Page<RoomResponse> getAllRoomForAdmin(String title, Integer pageNo, Integer pageSize);

    MessageResponse checkoutRoom(Long id);

    MessageResponse isApproveRoom(Long id);

    MessageResponse removeRoom(Long id);
}
