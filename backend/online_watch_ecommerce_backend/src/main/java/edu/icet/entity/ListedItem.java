package edu.icet.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class ListedItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer itemId;

    @Column(unique = true, nullable = false)
    private String itemCode;

    @Column(nullable = false)
    private String itemCategory;

    @Column(nullable = false, columnDefinition = "BOOLEAN DEFAULT TRUE")
    private Boolean inStock;

    @Column(nullable = false, columnDefinition = "BOOLEAN DEFAULT TRUE")
    private Boolean isVisible;

    @Column(nullable = false)
    private String quantity;

    @Column(nullable = false)
    private String entUser;

    @Column(nullable = false)
    private Date entDate;

    private String modUser;
    private Date modDate;

    @OneToOne(mappedBy = "listedItem", cascade = CascadeType.ALL)
    private ListedItemDetail itemDetail;

}
