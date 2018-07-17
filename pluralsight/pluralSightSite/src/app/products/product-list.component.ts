import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
	selector: 'pm-products',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
	pageTitle: string = 'Product List';
	imageWidth: number = 40;
	imageMargin: number = 2;
	showImage: boolean = false;
	filteredProducts: IProduct[];
	products: IProduct[] = [
		{
			'productId': 2,
			'productName': 'garden cart',
			'productCode': 'GDN-0023',
			'releaseDate': 'March 18, 2016',
			'description': 'utter trash',
			'price': 32.99,
			'starRating': 4.2,
			'imageUrl': 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fi.ebayimg.com%2Fimages%2Fi%2F381531379515-0-1%2Fs-l1000.jpg&f=1'
		},
		{
			'productId': 3,
			'productName': 'ugly garden cart',
			'productCode': 'GDN-0024',
			'releaseDate': 'March 18, 2016',
			'description': 'utter trasher',
			'price': 22.99,
			'starRating': 3.2,
			'imageUrl': 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fi.ebayimg.com%2Fimages%2Fi%2F381531379515-0-1%2Fs-l1000.jpg&f=1'
		},
		{
			'productId': 4,
			'productName': 'pretty garden cart',
			'productCode': 'GDN-0025',
			'releaseDate': 'March 18, 2016',
			'description': 'utter mediocre',
			'price': 42.99,
			'starRating': 4.5,
			'imageUrl': 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fi.ebayimg.com%2Fimages%2Fi%2F381531379515-0-1%2Fs-l1000.jpg&f=1'
		}
	];

	get listFilter(): string {
		return this._listFilter;
	}
	set listFilter(value:string) {
		this._listFilter = value;
		console.log('made it hereee');
		this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter): this.products;
	}

	toggleImage(): void {
		this.showImage = !this.showImage;
	}

	ngOnInit(): void {
		console.log('in OnInit');
	}
	constructor() {
		console.log('made it here!');
		this.filteredProducts = this.products;
		this.listFilter = 'cart';
	}
	performFilter(filterBy: string): IProduct[] {
		filterBy = filterBy.toLocaleLowerCase();
		return this.products.filter((product: IProduct) =>
		product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
	}
}
