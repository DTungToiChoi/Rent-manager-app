package com.cntt.rentalmanagement.repository;

import com.cntt.rentalmanagement.domain.models.Room;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface RoomRepositoryCustom {
    Page<Room> searchingRoom(String title, Long userId, Pageable pageable);
}
