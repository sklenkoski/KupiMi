package com.kupimi.recepti.model;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="boxPromotions")
public class BoxPromotion {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    public String id;

    @NonNull
    @Size(min = 3, message = "Name must be at least 3 characters long")
    public String name;
    public int price;
    public String shortDescription;
    public String longDescription;

    @ManyToMany(targetEntity=Recipe.class, fetch = FetchType.EAGER)
    public List<Recipe> recipes;

    public String imageurl;

}
