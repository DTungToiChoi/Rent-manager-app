package com.cntt.rentalmanagement.repository;

import com.cntt.rentalmanagement.domain.models.Request;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface RequestCustomRepository {
    Page<Request> searchingOfRequest(String keyword,Long userId, Pageable pageable);
}
