package com.kupimi.recepti.model;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="orders", schema = "public")
public class Order {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    public String id;

    @ManyToOne(targetEntity=User.class)
    public User user;
    public String clientAddress;


    @ManyToMany(targetEntity=Recipe.class)
    public List<Recipe> recipes;

    @ManyToMany(targetEntity=BoxPromotion.class)
    public List<BoxPromotion> boxPromotions;

    public String Date;

    public int price;

}
