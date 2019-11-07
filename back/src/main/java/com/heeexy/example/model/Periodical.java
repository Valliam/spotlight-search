package com.heeexy.example.model;

import lombok.Data;
import lombok.experimental.Accessors;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.io.Serializable;

@Data
@Accessors(chain = true)
@Document(indexName = "wanwei", type = "java")
public class Periodical implements Serializable {
    private static final long serialVersionUID = 6320548148250372657L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "book_name", nullable = true, length = 255)
    private String bookName;
    @Column(name = "impact_factor_one", nullable = true, length = 255)
    private String impactFactorOne;
    @Column(name = "impact_factor_two", nullable = true, length = 255)
    private String impactFactorTwo;
    @Column(name = "impact_factor_three", nullable = true, length = 255)
    private String impactFactorThree;
    @Column(name = "department", nullable = true, length = 255)
    private String department;
    @Column(name = "company", nullable = true, length = 255)
    private String company;
    @Column(name = "editorial_office", nullable = true, length = 255)
    private String editorialOffice;
    @Column(name = "editor", nullable = true, length = 255)
    private String editor;
    @Column(name = "place", nullable = true, length = 255)
    private String place;
    @Column(name = "code", nullable = true, length = 255)
    private String code;
    @Column(name = "phone", nullable = true, length = 255)
    private String phone;
    @Column(name = "website", nullable = true, length = 255)
    private String website;
    @Column(name = "biaozhukanhao", nullable = true, length = 255)
    private String biaozhukanhao;
    @Column(name = "postal_code", nullable = true, length = 255)
    private String postalCode;
    @Column(name = "money", nullable = true, length = 255)
    private String money;
    @Column(name = "ways", nullable = true, length = 255)
    private String ways;
    @Column(name = "post_box", nullable = true, length = 255)
    private String postBox;
    @Column(name = "chukan_date", nullable = true, length = 255)
    private String chukanDate;
    @Column(name = "introduction", nullable = true, length = 255)
    private String introduction;
    @Column(name = "url", nullable = true, length = 255)
    private String url;

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getImpactFactorOne() {
        return impactFactorOne;
    }

    public void setImpactFactorOne(String impactFactorOne) {
        this.impactFactorOne = impactFactorOne;
    }

    public String getImpactFactorTwo() {
        return impactFactorTwo;
    }

    public void setImpactFactorTwo(String impactFactorTwo) {
        this.impactFactorTwo = impactFactorTwo;
    }

    public String getImpactFactorThree() {
        return impactFactorThree;
    }

    public void setImpactFactorThree(String impactFactorThree) {
        this.impactFactorThree = impactFactorThree;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getEditorialOffice() {
        return editorialOffice;
    }

    public void setEditorialOffice(String editorialOffice) {
        this.editorialOffice = editorialOffice;
    }

    public String getEditor() {
        return editor;
    }

    public void setEditor(String editor) {
        this.editor = editor;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public String getBiaozhukanhao() {
        return biaozhukanhao;
    }

    public void setBiaozhukanhao(String biaozhukanhao) {
        this.biaozhukanhao = biaozhukanhao;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getMoney() {
        return money;
    }

    public void setMoney(String money) {
        this.money = money;
    }

    public String getWays() {
        return ways;
    }

    public void setWays(String ways) {
        this.ways = ways;
    }

    public String getPostBox() {
        return postBox;
    }

    public void setPostBox(String postBox) {
        this.postBox = postBox;
    }

    public String getChukanDate() {
        return chukanDate;
    }

    public void setChukanDate(String chukanDate) {
        this.chukanDate = chukanDate;
    }

    public String getIntroduction() {
        return introduction;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
