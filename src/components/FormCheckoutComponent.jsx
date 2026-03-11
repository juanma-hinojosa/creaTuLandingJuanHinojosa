

function FormCheckOutComponent({
  register,
  handleSubmit,
  finalizarCompra,
  errors,
  getValues,
  loading
}) {
  return (
    <div
      style={{ maxWidth: '700px', padding: '20px' }}
    >
      <div style={{ padding: '20px', backgroundColor: '#f3f2f2', border: '1px solid #eeeded', borderRadius: '4px', maxWidth: '500px' }} >
        <h1 style={{ color: '#6e2b2b', letterSpacing: '0px' }} >Completa los campos</h1>
        {/* {error && <span style={{ color: 'red', fontWeight: 'bold' }}>{error}</span>} */}
        <form
          onSubmit={handleSubmit(finalizarCompra)}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '10px'
          }}
        >
          <input name='name' placeholder='Ingrese su nombre' style={styles.input} type="text" {...register("name", { required: true, minLength: 3 })} />
          {errors?.name?.type === "required" && <small style={{ color: 'red' }}>Por favor complete el campo</small>}
          {errors?.name?.type === "minLength" && <small style={{ color: 'red' }}>El nombre debe contener mínimo 3 caracteres</small>}

          <input name='lastname' placeholder='Ingrese su apellido' style={styles.input} type="text" {...register("lastname", { required: true, minLength: 2 })} />
          {errors?.lastname?.type === "required" && <small style={{ color: 'red' }}>Por favor complete el campo</small>}
          {errors?.lastname?.type === "minLength" && <small style={{ color: 'red' }}>El apellido debe contener mínimo 2 caracteres</small>}

          <input name='address' placeholder='Ingrese su dirección' style={styles.input} type="text" {...register("address", { required: true, minLength: 10, maxLength: 35 })} />
          {errors?.address?.type === "required" && <small style={{ color: 'red' }}>Por favor complete el campo</small>}
          {errors?.address?.type === "minLength" && <small style={{ color: 'red' }}>La dirección debe ser completa</small>}
          {errors?.address?.type === "maxLength" && <small style={{ color: 'red' }}>La dirección es demasiado larga</small>}

          <input name='email' placeholder='Ingrese su correo' style={styles.input} type='email'{...register("email", { required: true })} />
          {errors?.email?.type === "required" && <small style={{ color: 'red' }}>Por favor complete el campo</small>}

          <input name='secondemail' placeholder='Repita su correo' style={styles.input} type="email"{...register("secondemail", { required: true, validate: { equalsMails: mail2 => mail2 === getValues().email } })} />
          {errors?.secondemail?.type === "required" && <small style={{ color: 'red' }}>Por favor complete el campo</small>}
          {errors?.secondemail?.type === "equalsMails" && <small style={{ color: 'red' }}>Los correos deben ser iguales</small>}

          <button type='submit' style={styles.button} disabled={loading} >{loading ? 'Procesando Compra...' : 'Generar Orden'}</button>
        </form>
      </div>
    </div>
  )
}

const styles = {
  input: {
    padding: '15px',
    borderRadius: '4px',
    border: '1px solid #e2e2e2',
    backgroundColor: 'white',
    color: 'black'
  },
  button: {
    backgroundColor: "#72ab59",
    padding: '15px',
    borderRadius: '4px',
    border: 'none',
    fontSize: '15px'
  }
}

export default FormCheckOutComponent