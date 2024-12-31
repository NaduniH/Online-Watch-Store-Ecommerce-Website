package edu.icet.controller;

import edu.icet.dto.Customer;
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
            return ResponseEntity.ok(items); // Return the list of items
        } catch (Exception e) {

            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null); // Or return an appropriate error message
        }
    }
    @PutMapping("/updateItem")
    public void UpdateItem (@RequestBody Item item){
        itemService.UpdateItem(item);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteItem(@PathVariable Integer id) {
        itemService.deleteItem(id);
    }

}
