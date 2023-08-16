package com.cntt.rentalmanagement.domain.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "request")
@Getter
@Setter
public class Request {
    @Id
    @GeneratedValue()
    private Long id;
    private String name;
    private String phoneNumber;
    private String description;
    @Column(name = "is_answer")
    private Boolean isAnswer;
    @ManyToOne
    @JoinColumn(name = "room_id")
    private Room room;
}
