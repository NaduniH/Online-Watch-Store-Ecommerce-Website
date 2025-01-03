package edu.icet.service.impl;

import edu.icet.dto.Item;
import edu.icet.dto.ItemDetail;
import edu.icet.entity.ListedItem;
import edu.icet.entity.ListedItemDetail;
import edu.icet.repository.ItemRepository;
import edu.icet.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService {

    final ItemRepository itemRepository;
    final ModelMapper mapper;

    @Override
    public void addItem(Item item) {

        ListedItem listedItem = mapper.map(item, ListedItem.class);
        System.out.println("================================="+item.getItemCode()+"=============================================");
        ListedItemDetail listedItemDetail = mapper.map(item.getItemDetail(), ListedItemDetail.class);

        listedItemDetail.setItemCode(item.getItemCode());
        listedItem.setItemDetail(listedItemDetail);

        itemRepository.save(listedItem);
    }

    @Override
    public List<Item> getAllItems() {

        List<ListedItem> listedItems = itemRepository.findAll();

        return listedItems.stream()
                .map(listedItem -> {
                    // Map each ListedItem entity to the Item DTO
                    Item item = mapper.map(listedItem, Item.class);
                    if (listedItem.getItemDetail() != null) {
                        item.setItemDetail(mapper.map(listedItem.getItemDetail(), ItemDetail.class));
                    }
                    return item;
                })
                .toList();
    }

    @Override
    public void UpdateItem(Item item) {
        itemRepository.save(mapper.map(item, ListedItem.class));
    }

    @Override
    public void deleteItem(Integer id) {
        itemRepository.deleteById(id);
    }

    @Override
    public Item findByItemCode(String itemCode) {
        ListedItem listedItem = itemRepository.findByItemCode(itemCode);
        if(listedItem !=  null){
            Item item = mapper.map(listedItem, Item.class);
            return item;
        }else{
            return null;
        }

    }

}
