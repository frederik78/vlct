package fr.frederic.evolocity.item.manager.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.frederic.evolocity.item.manager.model.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long>{
	
	List<Item> findAllByOrderByName();
	
	List<Item> findByName(String name);

}
