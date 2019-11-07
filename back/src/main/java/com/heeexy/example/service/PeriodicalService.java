package com.heeexy.example.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.IService;
import com.heeexy.example.model.Periodical;

import java.util.List;

public interface PeriodicalService extends IService<Periodical> {
    List<Periodical> getList(QueryWrapper<Periodical> queryWrapper);
}
