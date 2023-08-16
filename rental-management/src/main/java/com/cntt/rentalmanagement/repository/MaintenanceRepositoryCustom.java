package com.cntt.rentalmanagement.repository;

import com.cntt.rentalmanagement.domain.models.Maintenance;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface MaintenanceRepositoryCustom {
    Page<Maintenance> searchingMaintenance(String keyword,Long userId, Pageable pageable);
}
