import { Component, createRef } from "react";

export default class ModalAddNew extends Component {
  constructor(){
    super();

    this.handleSubmit = () => {return false};

    this.state = {
      titulo: "",
      buttonText: "",
      id: null,
      prod_id: -1,
      nombre: "",
      descripcion: "",
      marca: "",
      codigo: "",
      unidad: "unidad",
      stock: 0.0,
      precio: 0,
      funcHandleSubmit: this.handleSubmit
    };

    this.formRef = createRef();
    this.modalRef = createRef();

    this.handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      });
    };

    this.setData = (producto) => {
      this.setState({
        prod_id: producto.id,
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        marca: producto.marca,
        codigo: producto.codigo,
        unidad: producto.unidad,
        stock: producto.stock,
        precio: producto.precio
      });
      this.forceUpdate();
    };

    this.cleanModalData = () => {
      this.setState({
        prod_id: -1,
        nombre: "",
        descripcion: "",
        marca: "",
        codigo: "",
        unidad: "unidad",
        stock: 0.0,
        precio: 0,
      });
    };
    
    // For render:
    this.tipos = [
      "unidad",
      "kg",
      "gr"
    ]
    this.renderUnityOptions = () => {
      const { tipos } = this;
      const count = tipos.length;
      if(!count) return [];
      
      let list = [];
      for(let i = 0; i < count; ++i){
        list.push( <option key={`op${i}`} value={tipos[i]}>{tipos[i]}</option> );
      }
      return list;
    }
  }
      
  componentDidMount(){
    this.setState({
      titulo: this.props.titulo,
      buttonText: this.props.buttonText,
      id: this.props.id,
      inventario: this.props.inventario,
      

      funcHandleSubmit: async (event) => {
        await event.preventDefault();
        let form = this.formRef.current;
        if(form.checkValidity()){
          const { id } = this.state;

          const producto = {
            prod_id: this.state.prod_id,
            nombre: this.state.nombre,
            descripcion: this.state.descripcion,
            marca: this.state.marca,
            codigo: this.state.codigo,
            unidad: this.state.unidad,
            stock: this.state.stock,
            precio: this.state.precio,
            foto: "x.jpg"
          };
          const ans = await this.props.buttonFunction(producto);
          console.log(ans);
          if(ans){
            form.classList.remove("was-validated");
            this.cleanModalData();
            $(`#${id}`).modal("toggle");
            this.props.functionVisualUpdate();
            return false;
          }else{
            console.log(" [Form] False response from button function.");
          }
        }else{
          console.log(" [Form] Invalid data.");
          form.classList.add("was-validated");
        }
      }
    });
    this.props.functionVisualUpdate();
  }
  
  render(){
    const { 
      titulo, buttonText, id, funcHandleSubmit,  // shared use
      nombre, descripcion, marca, codigo, unidad, stock, precio // values for form components
    } = this.state;
    const {
      renderUnityOptions, handleChange,
      formRef, modalRef
    } = this;
    
    return(
      <div id={id} ref={modalRef} className="modal fade" role="dialog">
        <div className="modal-dialog" style={{ maxWidth: "700px", width: "90vw" }}>

        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{titulo}</h4>
          </div>

          <form onSubmit={funcHandleSubmit} ref={formRef} className="needs-validation" noValidate>
            <div className="modal-body">

              <div className="form-row">
                <div className="col">
                  <label htmlFor="nombre">Nombre</label>
                  <input id="nombre" value={nombre} onChange={handleChange} type="text" className="form-control" required/>
                  <div className="invalid-feedback">
                    Es necesario un nombre.
                  </div>
                </div>
                <div className="col">
                  <label htmlFor="descripcion">Descripción</label>
                  <input id="descripcion" value={descripcion} onChange={handleChange} type="text" className="form-control"/>
                </div>
                <div className="col">
                  <label htmlFor="marca">Marca</label>
                  <input id="marca" value={marca} onChange={handleChange} type="text" className="form-control"/>
                </div>
              </div>

              <div className="form-row m-b-5">
                <div className="col">
                  <label htmlFor="codigo">Código</label>
                  <input id="codigo" value={codigo} onChange={handleChange} type="text" className="form-control"/>
                </div>
                <div className="col">
                  <label htmlFor="tipo" className="text-nowrap">Tipo de Unidad</label>
                  <select value={unidad} onChange={handleChange} className="custom-select">
                    {renderUnityOptions()}
                  </select>
                </div>
                <div className="col">
                  <label htmlFor="stock">Stock</label>
                  <input id="stock" value={stock} onChange={handleChange} type="text" className="form-control" required/>
                  <div className="invalid-feedback">
                    Es necesario conocer la cantidad.
                  </div>
                </div>
                <div className="col">
                  <label htmlFor="precio">Precio</label>
                  <input id="precio" value={precio} onChange={handleChange} type="text" className="form-control" required/>
                  <div className="invalid-feedback">
                    Es necesario un precio.
                  </div>
                </div>
              </div>

            </div>

            <div className="modal-footer">
              <button type="submit" className="btn btn-primary" style={{ width: "10rem" }}>
                {buttonText}
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