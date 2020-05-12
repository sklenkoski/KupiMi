package com.kupimi.recepti.model;

import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.HashMap;
import java.util.List;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="recipes")
public class Recipe {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    public String id;

    @NonNull
    @Size(min = 3, message = "Name must be at least 3 characters long")
    public String name;

    public int price;
    public String type;

    @Column(length = 4096)
    public String description;
    public String cookingTime;
    public String portions;
    @ElementCollection(targetClass=Integer.class, fetch = FetchType.EAGER)
    public List<Integer> Reviews;
    public String imageurl;

}
