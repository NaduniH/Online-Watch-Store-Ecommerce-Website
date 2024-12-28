package edu.icet.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ItemDetail {

    private Integer detailId;
    private String itemCode;
    private Double itemPrice;
    private String itemDescription;
    private String itemImgUrl;


}
