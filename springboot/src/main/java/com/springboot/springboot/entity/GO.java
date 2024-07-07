package com.springboot.springboot.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class GO {

    @Id
    private String goNumber;

    @Lob
    private byte[] pdfFile;

    public GO() {
    }

    public GO(String goNumber, byte[] pdfFile) {
        this.goNumber = goNumber;
        this.pdfFile = pdfFile;
    }

    public String getGoNumber() {
        return goNumber;
    }

    public void setGoNumber(String goNumber) {
        this.goNumber = goNumber;
    }

    public byte[] getPdfFile() {
        return pdfFile;
    }

    public void setPdfFile(byte[] pdfFile) {
        this.pdfFile = pdfFile;
    }

    

}