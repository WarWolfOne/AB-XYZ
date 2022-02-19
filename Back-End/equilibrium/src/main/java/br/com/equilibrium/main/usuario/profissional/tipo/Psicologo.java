package br.com.equilibrium.main.usuario.profissional.tipo;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table (name = "Psicologos")
@Getter
@Setter

public class Psicologo {

    @Column(name = "CRP")
    public String CRP;

    @Column (name = "estadoEmissao")
    public String estadoEmissao;
}
