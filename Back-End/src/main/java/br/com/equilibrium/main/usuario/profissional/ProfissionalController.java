package br.com.equilibrium.main.usuario.profissional;

//Controle de acesso.

import br.com.equilibrium.core.controller.ResponseAbtractController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/profissionais")
public class ProfissionalController extends ResponseAbtractController {

    @Autowired
    private ProfissionalService profissionalService;

    @GetMapping
    public ResponseEntity<?> findAll() {
        return jsonResponse(profissionalService.findAll());
    }

    @GetMapping("{id}")
    public ResponseEntity<?> findById(@PathVariable long id) {
        return jsonResponse(profissionalService.findById(id));
    }

    @PostMapping
    public ResponseEntity<?> save(@Validated @RequestBody Profissional profissional, Errors errors) {
        return jsonResponse(profissionalService.save(profissional, errors));
    }

    @PutMapping
    public ResponseEntity<?> update(@Validated @RequestBody Profissional profissional, Errors errors) {
        return jsonResponse(profissionalService.save(profissional, errors));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> deleById(@PathVariable long id) {
        profissionalService.deleteById(id);
        return jsonResponse();
    }
}
