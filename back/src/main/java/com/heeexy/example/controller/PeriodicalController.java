package com.heeexy.example.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.heeexy.example.dao.PeriodicalRepository;
import com.heeexy.example.model.Periodical;
import com.heeexy.example.response.APIResponse;
import com.heeexy.example.service.PeriodicalService;
import com.heeexy.example.util.constants.Config;
import io.netty.util.internal.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/periodical")
public class PeriodicalController {
    @Autowired
    private PeriodicalRepository periodicalRepository;
    @Autowired
    private PeriodicalService periodicalService;

//    @PostMapping("/add")
//    public APIResponse add(@RequestBody Periodical blogModel) {
//        Periodical b = periodicalRepository.save(blogModel);
//        Map<String,Object> data = new HashMap<>();
//        data.put("id",b.getId());
//        data.put("id",b.getId());
//        return new APIResponse(data);
//    }
//
//    @GetMapping("/get/{introduction}")
//    public APIResponse getByIntroduction(@PathVariable String introduction) {
//        Map<String,Object> data = new HashMap<>();
//        if (StringUtils.isEmpty(introduction))
//            return new APIResponse(100,"introduction should not be null");
//        Optional<Periodical> blogModelOptional = periodicalRepository.findById(introduction);
//        if (blogModelOptional.isPresent()) {
//            Periodical blogModel = blogModelOptional.get();
//
//            data.put("info",blogModel);
//            return new APIResponse(data);
//        }
//        return new APIResponse(200,"don't know");
//    }

    @GetMapping("/getAll")
    public APIResponse getAll() {
        Map<String,Object> data = new HashMap<>(2);
        long total = periodicalRepository.count();
        Iterable<Periodical> iterable = periodicalRepository.findAll();
        List<Periodical> list = new ArrayList<>();
        iterable.forEach(list::add);
        data.put("total",total);
        data.put("dataList",list);
        return new APIResponse(data);
    }
    @GetMapping("/addAll")
    public APIResponse addAll(){
        List<Periodical> list = periodicalService.getList(
                new QueryWrapper<Periodical>()
        );
        Map<String, Object> data = new HashMap<>();
        if (list.size() == 0) {
            return new APIResponse(Config.RE_CODE_DATA_NOT_EXISTS, Config.RE_MSG_DATA_NOT_EXISTS);
        }
        data.put("start","1");
        for (Periodical blogModel : list) {
            Periodical b = periodicalRepository.save(blogModel);
            System.out.print(b);
        }
        data.put("end","1");
        return new APIResponse(data);
    }

    @RequestMapping("/search")
    public APIResponse searchBookName(String bookName) {
        System.out.println(bookName);
        Map<String,Object> data = new HashMap<>(1);
        if (StringUtils.isEmpty(bookName))
            return new APIResponse(300,"数据不能为空");
        Iterable<Periodical> iterable = periodicalRepository.findByIntroductionLike(bookName);
        List<Periodical> periodicalList = new ArrayList<>();
        iterable.forEach(periodicalList::add);
        long total = periodicalList.size();
        data.put("total",total);
        data.put("bookNameLike",periodicalList);
        return new APIResponse(data);
    }
}
