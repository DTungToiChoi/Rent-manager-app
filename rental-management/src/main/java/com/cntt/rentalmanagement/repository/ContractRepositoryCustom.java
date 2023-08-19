package com.cntt.rentalmanagement.repository;

import com.cntt.rentalmanagement.domain.models.Contract;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ContractRepositoryCustom {
    Page<Contract> searchingContact(String name, Long userId, Pageable pageable);

    List<Contract> getAllContract(Long userId);
}
