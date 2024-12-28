package edu.icet.service.impl;

import edu.icet.dto.Item;
import edu.icet.entity.ListedItem;
import edu.icet.entity.ListedItemDetail;
import edu.icet.repository.ItemDetailRepository;
import edu.icet.repository.ItemRepository;
import edu.icet.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.sql.SQLOutput;

@Service
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService {

    final ItemRepository itemRepository;
    final ItemDetailRepository itemDetailRepository;
    final ModelMapper mapper;

    @Override
    public void addItem(Item item) {

        ListedItem listedItem = mapper.map(item, ListedItem.class);
        System.out.println("================================="+item.getItemCode()+"=============================================");
//        ListedItemDetail listedItemDetail = mapper.map(item.getItemDetail(), ListedItemDetail.class);

//        listedItem.setItemCode(item.getItemCode());
     ListedItemDetail listedItemDetail = new ListedItemDetail();
        listedItemDetail.setItemCode(item.getItemCode());
        listedItemDetail.setItemPrice(item.getItemDetail().getItemPrice());
        listedItemDetail.setItemDescription(item.getItemDetail().getItemDescription());
        listedItemDetail.setItemImgUrl(item.getItemDetail().getItemImgUrl());


        listedItemDetail.setListedItem(listedItem);

        itemRepository.save(listedItem);
        itemDetailRepository.save(listedItemDetail);
    }
}
