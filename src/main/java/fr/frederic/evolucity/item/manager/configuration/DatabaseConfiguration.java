package fr.frederic.evolucity.item.manager.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableJpaRepositories("fr.frederic.evolucity.item.manager.repository")
@EnableTransactionManagement
public class DatabaseConfiguration {

}
