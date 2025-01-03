package edu.icet.controller;

import edu.icet.dto.Item;
import edu.icet.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/item")
@RequiredArgsConstructor
public class ItemController {

    private final ItemService itemService;

    @PostMapping("/addItem")
    public ResponseEntity<String> addItem (@RequestBody Item item){
        try {

            itemService.addItem(item);
            return ResponseEntity.ok("Item added successfully");
        } catch (Exception e) {

            e.printStackTrace();

            return ResponseEntity.badRequest().body("Error adding item: " + e.getMessage());
        }
    }

    @GetMapping("/getAllItems")
    public ResponseEntity<List<Item>> getAllItems() {
        try {
            List<Item> items = itemService.getAllItems();
            return ResponseEntity.ok(items);
        } catch (Exception e) {

            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        }
    }
    @PutMapping("/updateItem")
    public void UpdateItem (@RequestBody Item item){
        itemService.UpdateItem(item);
    }

    @DeleteMapping("/deleteItem/{id}")
    public void deleteItem(@PathVariable Integer id) {
        itemService.deleteItem(id);
    }

    @GetMapping("/findByItemCode")
    public ResponseEntity<Item> findByItemCode(@RequestParam String itemCode) {
        try {
            Item item = itemService.findByItemCode(itemCode);
            return ResponseEntity.ok(item);
        } catch (Exception e) {

            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        }
    }

}
