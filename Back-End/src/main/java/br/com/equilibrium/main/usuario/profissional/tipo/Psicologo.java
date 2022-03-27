package br.com.equilibrium.main.usuario.profissional.tipo;

import br.com.equilibrium.main.usuario.profissional.Profissional;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table (name = "Psicologos")
@Getter
@Setter

public class Psicologo extends Profissional {

    @Column(name = "CRP")
    private String CRP;

    @Column (name = "estadoEmissao")
    private String estadoEmissao;
}
