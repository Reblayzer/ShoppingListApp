package com.example.shoppinglist.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Entity
@Table
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Item {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column
    private Long id;
    @Column
    private String name;
    @Column
    private String description;
    @Column

    private boolean bought;

    public Item(Long id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.bought = false;
    }
}
