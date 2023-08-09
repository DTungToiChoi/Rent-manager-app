package com.cntt.rentalmanagement.domain.models;

import javax.persistence.*;

@Entity
@Table(name = "request")
public class Request {
    @Id
    @GeneratedValue()
    private Long id;
    private String name;
    private String phoneNumber;
    private String description;
    @ManyToOne
    @JoinColumn(name = "room_id")
    private Room room;
}
