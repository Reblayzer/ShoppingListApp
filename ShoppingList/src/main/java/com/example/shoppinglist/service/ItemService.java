package com.example.shoppinglist.service;

import com.example.shoppinglist.entity.Item;
import com.example.shoppinglist.repository.ItemRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ItemService {
    private ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public void addItem(Item item) {
        itemRepository.save(item);
    }


    public Optional<Item> getItemById(int id) {
        return itemRepository.findById(id);
    }


    public List<Item> getAllItems() {
        List<Item> items = new ArrayList<>();
        itemRepository.findAll().forEach(item -> items.add(item));
        return items;
    }

    @Transactional
    public void updateItemById(Item item) {
        Item foundItem = itemRepository.findById(Math.toIntExact(item.getId())).orElseThrow();
        if (!foundItem.getName().equals(item.getName())) {
            foundItem.setName(item.getName());
        }
        if (!foundItem.getDescription().equals(item.getDescription())) {
            foundItem.setDescription(item.getDescription());
        }
    }

    @Transactional
    public void checkItemById(int id) {
        Item item = itemRepository.findById(id).orElse(null);
        if(item != null) {
            item.setBought(!item.isBought());
        }
    }

    public void deleteItemById(int id) {
        itemRepository.deleteById(id);
    }
}
