package com.heeexy.example.response;

import com.heeexy.example.util.constants.Config;

import java.util.Collections;
import java.util.List;
import java.util.Map;

public class APIResponse<T> {

    private int recode; //状态码
    private String remsg; // 状态信息
    private T body; //返回数据

    public APIResponse(int errorCode, String errorMsg) {
        this.recode = errorCode;
        this.remsg = errorMsg;
        body = (T) Collections.EMPTY_MAP;
    }

    public APIResponse() {
        this.recode = Config.RE_CODE_SUCCESS;
        this.remsg = Config.RE_MSG_SUCCESS;
        body = (T) Collections.EMPTY_MAP;
    }

    public APIResponse(T data) {
        this.recode = Config.RE_CODE_SUCCESS;
        this.remsg = Config.RE_MSG_SUCCESS;
        body = data;
    }


    public APIResponse(List<T> data) {
        this.recode = Config.RE_CODE_SUCCESS;
        this.remsg = Config.RE_MSG_SUCCESS;
        body = (T) data;
    }

    public APIResponse(Map<String, Object> data) {
        this.recode = Config.RE_CODE_SUCCESS;
        this.remsg = Config.RE_MSG_SUCCESS;
        body = (T) data;
    }

    public APIResponse(int errorCode, String errorMsg, Map<String, Object> data) {
        this.recode = errorCode;
        this.remsg = errorMsg;
        body = (T) data;
    }

    public int getRecode() {
        return recode;
    }

    public void setRecode(int recode) {
        this.recode = recode;
    }

    public String getRemsg() {
        return remsg;
    }

    public void setRemsg(String remsg) {
        this.remsg = remsg;
    }

    public T getBody() {
        return body;
    }

    public void setBody(T body) {
        this.body = body;
    }
}
