package fr.frederic.evolocity.item.manager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.frederic.evolocity.item.manager.model.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long>{

}
