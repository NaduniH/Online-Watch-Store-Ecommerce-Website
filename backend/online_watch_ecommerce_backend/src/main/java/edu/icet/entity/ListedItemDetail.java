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
public class ListedItemDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer detailId;

    @Column(name = "item_code",unique = true)
    private String itemCode;

    private String itemName;


    @Column(nullable = false)
    private Double itemPrice;

    @Column(nullable = false, columnDefinition = "VARCHAR(400) NOT NULL")
    private String itemDescription;


    private String itemImgUrl;

    @OneToOne
    @JoinColumn(name = "item_code", referencedColumnName = "itemCode", insertable = false, updatable = false)
    private ListedItem listedItem;
}
