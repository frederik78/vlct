package fr.frederic.evolocity.item.manager.rest;

import java.net.URISyntaxException;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.frederic.evolocity.item.manager.model.Item;
import fr.frederic.evolocity.item.manager.repository.ItemRepository;

@RestController
@RequestMapping("/api")
public class ItemResource {

    private final Logger log = LoggerFactory.getLogger(ItemResource.class);

    private final ItemRepository itemRepository;


    public ItemResource(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    @PostMapping("/items")
    public Item createItem(@RequestBody Item item) throws URISyntaxException {
        log.debug("REST request to save Item : {}", item);

        return this.itemRepository.save(item);
    }

    @PutMapping("/items")
    public Item updateDemande(@RequestBody Item item) throws URISyntaxException {
        return this.itemRepository.save(item);
    }

    @GetMapping("/items")
//    public Page<Item> getAllItems(Pageable pageable) {
  public List<Item> getAllItems(Pageable pageable) {
        log.debug("REST request to get a page of Demandes");
        return this.itemRepository.findAllByOrderByName();
    }

    @GetMapping("/items/{id}")
    public Item getItem(@PathVariable Long id) {
        log.debug("REST request to get Demande : {}", id);
        return this.itemRepository.findById(id).orElse(null);
    }

    @DeleteMapping("/items/{id}")
    public void deleteItem(@PathVariable Long id) {
        log.debug("REST request to delete Demande : {}", id);
        this.itemRepository.deleteById(id);
    }
}
