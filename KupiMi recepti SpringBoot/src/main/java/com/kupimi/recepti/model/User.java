package com.kupimi.recepti.model;
import lombok.*;
import javax.persistence.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="users")
public class User {

    @Id
    public String email;

    public String name;
    public String surname;
    public boolean admin;

}
