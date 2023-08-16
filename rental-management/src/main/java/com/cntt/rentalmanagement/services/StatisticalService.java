package com.cntt.rentalmanagement.services;

import com.cntt.rentalmanagement.domain.payload.request.TotalNumberRequest;

public interface StatisticalService {
    TotalNumberRequest getNumberOfRentalerForStatistical();
}
