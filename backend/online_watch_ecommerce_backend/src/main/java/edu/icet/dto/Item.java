package edu.icet.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Item {

    private Integer itemId;
    private String itemCode;
    private String itemCategory;
    private Boolean inStock;
    private Boolean isVisible;
    private String quantity;
    private String entUser;
    private Date entDate;
    private String modUser;
    private Date modDate;
    private ItemDetail itemDetail;
}
