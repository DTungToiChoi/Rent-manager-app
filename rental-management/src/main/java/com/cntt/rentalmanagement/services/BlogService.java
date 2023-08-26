package com.cntt.rentalmanagement.services;

import com.cntt.rentalmanagement.domain.payload.response.RoomResponse;
import org.springframework.data.domain.Page;

public interface BlogService {
    Page<RoomResponse> getAllRoomForAdmin(String title, Boolean approve, Integer pageNo, Integer pageSize);

}
