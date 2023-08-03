package com.cntt.rentalmanagement.repository;

import com.cntt.rentalmanagement.domain.models.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface RoomRepository extends JpaRepository<Room, Long>, RoomRepositoryCustom{
}
