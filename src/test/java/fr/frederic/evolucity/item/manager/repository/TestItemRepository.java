package fr.frederic.evolucity.item.manager.repository;

import static org.assertj.core.api.Assertions.assertThat;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

import fr.frederic.evolocity.item.manager.Application;
import fr.frederic.evolocity.item.manager.model.Item;
import fr.frederic.evolocity.item.manager.repository.ItemRepository;
import liquibase.exception.LiquibaseException;
import liquibase.integration.spring.SpringLiquibase;

@RunWith(SpringRunner.class)
@DataJpaTest
@SpringBootTest(classes= {Application.class})
@ActiveProfiles("test")
@TestPropertySource(properties = "spring.liquibase.change-log=classpath:config/liquibase/test_master.xml")
public class TestItemRepository {

	 
	    @Autowired
	    private TestEntityManager entityManager;
	 
	    @Autowired
	    private ItemRepository itemRepository;
	    
	    @Autowired
	    private SpringLiquibase liquibase;
	   
	    @Before
	    public void init() throws LiquibaseException, IOException, SQLException {
	        liquibase.getDataSource().getConnection().setAutoCommit(false);
	    	liquibase.setShouldRun(true);
	        liquibase.afterPropertiesSet();
	    }
	    
	    @Test
	    public void findAllByNameTest() {
	       final List<Item> items = this.itemRepository.findAllByOrderByName();
	       assertThat(items.stream().map(Item::getName).collect(Collectors.toList())).containsExactly("Fusce Mollis Industries", "Libero Integer Institute", "Quis PC");
	    }
	    
	    @Test
	    @Transactional
	    public void updateItemNameTest() {
	       Item item = this.itemRepository.getOne(1L);
	       item.setName("AAAAAAAAAAAAAA");
	       this.itemRepository.save(item);
	       this.entityManager.flush();
	       item = this.itemRepository.getOne(1L);
	       assertThat(item.getName()).isEqualTo("AAAAAAAAAAAAAA");
	       
	    }
	    
	    @Test
	    @Transactional
	    public void createItemNameTest() {
	       Item item = new Item();
	       item.setName("BBBBBBBBB");
	       item.setQuantity(123);
	       this.itemRepository.saveAndFlush(item);
	       this.entityManager.clear();
	       
	       item = this.itemRepository.findByName("BBBBBBBBB").get(0);
	       assertThat(item.getName()).isEqualTo("BBBBBBBBB");
	    }
	    
	    @After
	    public void tearsDown() {
	    	final List<Item> items = this.itemRepository.findAllByOrderByName();
	    	System.out.println(items);
	    }
	 
}
