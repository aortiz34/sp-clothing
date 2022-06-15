import CategoryItem from '../category-item/catgory-item.component'

import './catalogue.styles.scss'

const Catalogue = ({category}) => {
    return(
        <div className="catalogue-container">
        {category.map(( category ) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    )
}

export default Catalogue