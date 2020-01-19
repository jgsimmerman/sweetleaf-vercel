import React, { Fragment } from 'react'

export default class Shipping extends React.Component {
  render() {
    return (
      <Fragment>
        {loading &&
          <LoadingAnimation />
        }
        {!loading && !!methods.length && (
          <div className='zygoteShipMethods'>
            <h2 className="zygoteSectionHeader">Shipping Options</h2>
            {methods.length > 1 && methods[0].shippingMethods && <h3>{`This order will arrive in ${methods.length} separate shipments`}</h3>}
            {methods[0].shippingMethods && (
              methods.map(({
                id,
                description,
                shippingMethods,
              }) => (
                <div key={`shippingMethodSet${id}`}>
                  {methods.length > 1 && methods[0].shippingMethods && <div className='zygoteShipMethodsSetDesc'><span>Items from this order:</span> {description}</div>}
                  <ShippingMethodsList
                    setId={id}
                    methods={shippingMethods}
                    selected={selected[id] ? selected[id] : selected}
                  />
                </div>
              ))
            )}
            {!methods[0].shippingMethods && (
              <ShippingMethodsList
                methods={methods}
                selected={selected}
              />
            )}
          </div>
        )}
      </Fragment>
    )
  }
  
}