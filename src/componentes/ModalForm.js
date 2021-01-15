import { Component, createRef } from "react";

export default class ModalForm extends Component {
  constructor(){
    super();

    this.handleSubmit = () => {return false};

    this.state = {
      id: null,
      inventario: undefined,
      nombre: "",
      descripcion: "",
      marca: "",
      codigo: "",
      unidad: "unidad",
      stock: 0.0,
      precio: 0,
      funcHandleSubmit: this.handleSubmit
    };

    this.tipos = [
      "unidad",
      "kg",
      "gr"
    ]
    this.formRef = createRef();
    this.modalRef = createRef();

    this.handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value.trim()
      })
    }

    this.cleanModalData = () => {
      $(`.modal-body`).find("input").val("");
    }
    
    this.renderUnityOptions = () => {
      const { tipos } = this;
      const count = tipos.length;
      if(!count) return [];
      
      let list = [ <option key="op0" defaultValue>{tipos[0]}</option> ];
      for(let i = 1; i < count; ++i){
        list.push( <option key={`op${i}`} value={i}>{tipos[i]}</option> );
      }
      return list;
    }
  }
      
  componentDidMount(){

    this.setState({
      id: this.props.id,
      inventario: this.props.inventario,

      funcHandleSubmit: (event) => {
        event.preventDefault();
        let form = this.formRef.current;
        if(form.checkValidity()){
          console.log("Should push to bd.");
          const { id, inventario } = this.state;
          $(`#${id}`).modal("toggle");
          
          if(inventario === undefined){
            console.log("Inventario can't handle submit.")
            return false;
          }

          const producto = {
            nombre: this.state.nombre,
            descripcion: this.state.descripcion,
            marca: this.state.marca,
            codigo: this.state.codigo,
            unidad: this.state.unidad,
            stock: this.state.stock,
            precio: this.state.precio,
            foto: "x.jpg"
          };
          inventario.addProduct(producto);
          
          this.cleanModalData();
          form.classList.remove("was-validated");
          this.props.funcForceUpdate();
          return false;
        }else{
          form.classList.add("was-validated");
        }
      }
    });
    this.props.funcForceUpdate();
  }
  
  render(){
    const { id, funcHandleSubmit } = this.state;
    const {
      renderUnityOptions, handleChange,
      formRef, modalRef
    } = this;
    
    return(
      <div id={id} ref={modalRef} className="modal fade" role="dialog">
        <div className="modal-dialog" style={{ maxWidth: "800px", width: "75vw" }}>

        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Agregar nuevo producto</h4>
          </div>

          <form onSubmit={funcHandleSubmit} ref={formRef} className="needs-validation" noValidate>
            <div className="modal-body">

              <div className="form-row">
                <div className="col">
                  <label htmlFor="nombre">Nombre</label>
                  <input id="nombre" onChange={handleChange} type="text" className="form-control" required/>
                  <div className="invalid-feedback">
                    Es necesario un nombre.
                  </div>
                </div>
                <div className="col">
                  <label htmlFor="descripcion">Descripción</label>
                  <input id="descripcion" onChange={handleChange} type="text" className="form-control"/>
                </div>
                <div className="col">
                  <label htmlFor="marca">Marca</label>
                  <input id="marca" onChange={handleChange} type="text" className="form-control"/>
                </div>
              </div>

              <div className="form-row m-b-5">
                <div className="col">
                  <label htmlFor="codigo">Código</label>
                  <input id="codigo" onChange={handleChange} type="text" className="form-control"/>
                </div>
                <div className="col">
                  <label htmlFor="tipo" className="text-nowrap">Tipo de Unidad</label>
                  <select onChange={handleChange} className="custom-select">
                    {renderUnityOptions()}
                  </select>
                </div>
                <div className="col">
                  <label htmlFor="stock">Stock</label>
                  <input id="stock" onChange={handleChange} type="text" className="form-control" required/>
                  <div className="invalid-feedback">
                    Es necesario conocer la cantidad.
                  </div>
                </div>
                <div className="col">
                  <label htmlFor="precio">Precio</label>
                  <input id="precio" onChange={handleChange} type="text" className="form-control" required/>
                  <div className="invalid-feedback">
                    Es necesario un precio.
                  </div>
                </div>
              </div>

            </div>

            <div className="modal-footer">
              <button type="submit" className="btn btn-primary" style={{ width: "10rem" }}>
                Crear
              </button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Cancelar
              </button>
            </div>
          </form>

        </div>

        </div>
      </div>
    );
  }
}