package com.cntt.rentalmanagement.repository;

import com.cntt.rentalmanagement.domain.models.RoomMedia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomMediaRepository extends JpaRepository<RoomMedia, Long> {
}
