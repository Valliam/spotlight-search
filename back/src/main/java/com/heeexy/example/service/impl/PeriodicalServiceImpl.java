package com.heeexy.example.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.heeexy.example.mapper.PeriodicalMapper;
import com.heeexy.example.model.Periodical;
import com.heeexy.example.service.PeriodicalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PeriodicalServiceImpl extends ServiceImpl<PeriodicalMapper, Periodical> implements PeriodicalService {
    @Autowired
    private PeriodicalMapper periodicalMapper;

    @Override
    public List<Periodical> getList(QueryWrapper<Periodical> queryWrapper) {
        return periodicalMapper.selectList(queryWrapper);
    }
}
