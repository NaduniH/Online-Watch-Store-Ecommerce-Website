package edu.icet.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "Customer")
public class CustomerEntity {
    @Id
    @Column(name="customerId",length = 45)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer customerId;

    @Column(name="name",length = 255)
    private String name;

    @Column(name="email",length = 255)
    private String email;

    @Column(name="phoneNo",length = 20)
    private String phoneNo;

    @Column(name="address",length = 255)
    private String address;

    @Column(name="password",length = 255)
    private String password;

}
