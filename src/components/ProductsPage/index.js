import {Component} from 'react'

import {FaChevronDown, FaAngleLeft, FaAngleRight} from 'react-icons/fa'

import './index.css'
import ProductItem from '../ProductItem'

const filterList = [
  {value: 'recommended', label: 'RECOMMENDED'},
  {value: 'newest-price', label: 'NEWEST PRICE'},
  {value: 'popular', label: 'POPULAR'},
  {value: 'high-to-low', label: 'PRICE: HIGH TO LOW'},
  {value: 'low-to-high', label: 'PRICE: LOW TO HIGH'},
]

const initialCustomizedFilterList = [
  {
    value: 'IDEAL FOR',
    id: 1,
    isActive: false,
  },
  {
    value: 'OCCASION',
    id: 2,
    isActive: false,
  },
  {
    value: 'WORK',
    id: 3,
    isActive: false,
  },
  {
    value: 'FABRIC',
    id: 4,
    isActive: false,
  },
  {
    value: 'SEGMENT',
    id: 5,
    isActive: false,
  },
  {
    value: 'SUITABLE FOR',
    id: 6,
    isActive: false,
  },
  {
    value: 'RAW MATERIALS',
    id: 7,
    isActive: false,
  },
  {
    value: 'PATTERN',
    id: 8,
    isActive: false,
  },
]

const productsList = [
  {
    id: 1,
    name: "Men's Casual Shirt",
    price: 29.99,
    category: 'men',
    isActive: true,
    imageUrl:
      'https://evilato.com/wp-content/uploads/2021/07/IMG-20210707-WA0074.jpg',
    description: 'A comfortable casual shirt for men.',
  },
  {
    id: 2,
    name: "Women's Summer Dress",
    price: 49.99,
    category: 'women',
    isActive: true,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXvg-uvax8MEQPoMQQutvuGTYblOg9DGuXwQ&',
    description: 'A stylish summer dress for women.',
  },
  {
    id: 3,
    name: "Kids' Backpack",
    price: 19.99,
    category: 'kids',
    isActive: true,
    imageUrl:
      'https://5.imimg.com/data5/SELLER/Default/2022/10/VE/US/VW/94580468/jhjjj-500x500.jpg',
    description: 'A durable backpack for kids.',
  },
  {
    id: 4,
    name: "Men's Running Shoes",
    price: 89.99,
    category: 'men',
    isActive: true,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLi4wVOeGvGsQXd--qMB8ZwEmoqoAbMan17w&s',
    description: 'Comfortable running shoes for men.',
  },
  {
    id: 5,
    name: "Women's Winter Coat",
    price: 129.99,
    category: 'women',
    isActive: false,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK13B2I7I8sitsqwCCwjas9mQIktvRZhoUxg&s',
    description: 'A warm winter coat for women.',
  },
  {
    id: 6,
    name: "Kids' Sneakers",
    price: 29.99,
    category: 'kids',
    isActive: true,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcf8-wXzRna00tS8pqyRAbyT6WpAJ-oQ1Psg&s',
    description: 'Comfortable sneakers for kids.',
  },
  {
    id: 7,
    name: 'Wireless Mouse',
    price: 25.99,
    category: 'Electronics',
    isActive: true,
    imageUrl:
      'https://static-ecapac.acer.com/media/catalog/product/1/_/1_24_5w.50611.004.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=500&width=500&canvas=500:500',
    description: 'A high-precision wireless mouse with ergonomic design.',
  },
  {
    id: 8,
    name: 'Bluetooth Headphones',
    price: 79.99,
    category: 'Electronics',
    isActive: false,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdx8yga9PKaE1q66R7gd9op-5EwgHU8sB8WQ&s',
    description:
      'Noise-cancelling Bluetooth headphones with long battery life.',
  },
  {
    id: 9,
    name: 'Office Chair',
    price: 149.99,
    category: 'Furniture',
    isActive: true,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh3g2KX2_DrOyX-l5jgNemCH4nwI2Hc1EWBw&s',
    description:
      'Ergonomic office chair with adjustable height and lumbar support.',
  },
  {
    id: 10,
    name: 'LED Desk Lamp',
    price: 39.99,
    category: 'Lighting',
    isActive: true,
    imageUrl: 'https://m.media-amazon.com/images/I/61QPRxJk3dL.jpg',
    description: 'Adjustable LED desk lamp with multiple brightness settings.',
  },
  {
    id: 11,
    name: 'Smartphone Stand',
    price: 12.99,
    category: 'Accessories',
    isActive: true,
    imageUrl:
      'https://m.media-amazon.com/images/I/51S0TCtI37L._AC_UF1000,1000_QL80_.jpg',
    description: 'Universal smartphone stand with adjustable angles.',
  },
  {
    id: 12,
    name: 'External Hard Drive',
    price: 89.99,
    category: 'Storage',
    isActive: false,
    imageUrl:
      'https://qph.cf2.quoracdn.net/main-qimg-157362c6e15e3989165702add6576274-lq',
    description: '1TB external hard drive for data backup and storage.',
  },
]

class ProductsPage extends Component {
  state = {
    selectedFilter: filterList[0].value,
    customizedFilterList: initialCustomizedFilterList,
    customizeContentShowOrNot: false,
  }

  handleFilter = event => {
    this.setState({
      selectedFilter: event.target.value,
    })
  }

  handleCustomizeFilter = event => {
    console.log(event.target.value)
    const {customizedFilterList} = this.state
    const filteredList = customizedFilterList.map(eachFilter => ({
      ...eachFilter,
      isActive:
        eachFilter.value === event.target.value
          ? !eachFilter.isActive
          : eachFilter.isActive,
    }))

    this.setState({
      customizedFilterList: filteredList,
    })
  }

  hideContentFilterButton = () => {
    const {customizeContentShowOrNot} = this.state
    this.setState({
      customizeContentShowOrNot: !customizeContentShowOrNot,
    })
  }

  render() {
    const {
      selectedFilter,
      customizedFilterList,
      customizeContentShowOrNot,
    } = this.state
    console.log(customizedFilterList)
    const buttonName = customizeContentShowOrNot ? 'Hide Filter' : 'Show Filter'
    const buttonNameFa = customizeContentShowOrNot ? (
      <FaAngleLeft />
    ) : (
      <FaAngleRight />
    )
    return (
      <>
        <div className="top-filter-section">
          <div className="top-left-section">
            <p className="items-para">3425 Items</p>
            <button
              type="button"
              className="filter-btn"
              onClick={this.hideContentFilterButton}
            >
              {buttonNameFa}
              {buttonName}
            </button>
            <button
              type="button"
              className="filter-button"
              onClick={this.hideContentFilterButton}
            >
              FILTER
            </button>
          </div>

          <form>
            <select
              id="filters"
              name="filters"
              className="select-dropbox"
              value={selectedFilter}
              onChange={this.handleFilter}
            >
              {filterList.map(eachFilter => (
                <option key={eachFilter.value} value={eachFilter.value}>
                  {eachFilter.label}
                </option>
              ))}
            </select>
          </form>
        </div>
        <div className="combine-container">
          {customizeContentShowOrNot && (
            <div className="filter-left-section">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">CUSTOMIZABLE</label>
              {customizedFilterList.map(eachList => (
                <div>
                  <button
                    type="button"
                    className="left-filters-btn"
                    value={eachList.value}
                    key={eachList.id}
                    onClick={this.handleCustomizeFilter}
                  >
                    {eachList.value} <br />
                    All
                    <span>
                      <FaChevronDown />
                    </span>
                  </button>
                  {eachList.isActive === true && (
                    <>
                      <input type="checkbox" id="men-ch" />
                      <label htmlFor="men-ch">Men</label>
                      <br />
                      <input type="checkbox" id="women-ch" />
                      <label htmlFor="women-ch">Women</label>
                      <br />
                      <input type="checkbox" id="baby-ch" />
                      <label htmlFor="baby-ch">Baby & Kids</label>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
          <div className="filter-right-section">
            {productsList.map(eachProduct => (
              <ProductItem product={eachProduct} key={eachProduct.id} />
            ))}
          </div>
        </div>
      </>
    )
  }
}

export default ProductsPage
