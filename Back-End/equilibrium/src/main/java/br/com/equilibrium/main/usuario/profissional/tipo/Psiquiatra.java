package br.com.equilibrium.main.usuario.profissional.tipo;

import br.com.equilibrium.main.usuario.profissional.Profissional;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table (name = "psiquiatras")
@Getter
@Setter

public class Psiquiatra extends Profissional {

    @Column (name = "CRM")
    private String CRM;

    @Column (name = "estadoEmissao")
    private String estadoEmissao;
}
