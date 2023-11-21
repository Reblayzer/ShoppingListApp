package com.example.shoppinglist.controller;

import com.example.shoppinglist.entity.Item;
import com.example.shoppinglist.service.ItemService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ItemServiceController {
    private ItemService itemService;

    public ItemServiceController(ItemService itemService) {
        this.itemService = itemService;
    }

    @PostMapping(value = "/items")
    public ResponseEntity<Object> addItem(@RequestBody Item item) {
        itemService.addItem(item);
        return new ResponseEntity<>("Item successfully added!", HttpStatus.CREATED);
    }

    @GetMapping(value = "/items/{id}")
    public ResponseEntity<Object> getItemById(@PathVariable("id") int id) {
        Optional<Item> item = itemService.getItemById(id);
        if (!item.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(item.get(), HttpStatus.OK);
    }

    @GetMapping(value = "/items")
    public ResponseEntity<List<Item>> getAllItems() {
        List<Item> items = itemService.getAllItems();
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    @PatchMapping(value = "/items/{id}")
    public ResponseEntity<Object> checkItemById(@PathVariable("id") int id) {
        itemService.checkItemById(id);
        return new ResponseEntity<>("Item successfully checked from list", HttpStatus.OK);
    }

    @PatchMapping(value = "/item")
    public ResponseEntity<Object> updateItemById(@RequestBody Item item) {
        itemService.updateItemById(item);
        return new ResponseEntity<>("Item successfully updated", HttpStatus.OK);
    }

    @DeleteMapping(value = "/items/{id}")
    public ResponseEntity<Object> deleteItemById(@PathVariable("id") int id) {
        itemService.deleteItemById(id);
        return new ResponseEntity<>("Item successfully deleted", HttpStatus.OK);
    }
}
