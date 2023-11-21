package com.example.shoppinglist;

import com.example.shoppinglist.entity.Item;
import com.example.shoppinglist.service.ItemService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;

@SpringBootTest
public class ItemServiceTest {
    @Autowired
    ItemService itemService;


    @Test
    public void addingItemTest(){
        assertDoesNotThrow(() -> itemService.addItem(new Item(1L, "name1",
                "desc1")));
    }
}
