package br.com.equilibrium.main.usuario.profissional.tipo;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table (name = "psiquiatras")
@Getter
@Setter

public class Psiquiatra {

    @Column (name = "CRM")
    public String CRM;

    @Column (name = "estadoEmissao")
    public String estadoEmissao;
}
