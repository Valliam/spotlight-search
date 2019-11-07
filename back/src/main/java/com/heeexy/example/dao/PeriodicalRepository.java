package com.heeexy.example.dao;

import com.heeexy.example.model.Periodical;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

import java.util.List;

public interface PeriodicalRepository extends ElasticsearchRepository<Periodical, String> {
    List<Periodical> findByIntroductionLike(String introduction);
    List<Periodical> findByBookNameLike(String bookName);

}
