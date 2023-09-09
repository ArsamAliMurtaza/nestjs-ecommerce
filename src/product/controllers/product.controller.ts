import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  Query,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { CreateProductDTO } from '../dtos/create-product.dto';
import { FilterProductDTO } from '../dtos/filter-product.dto';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/enums/role.enum';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiNotFoundResponse,
} from '@nestjs/swagger';

@Controller('store/products')
@ApiTags('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('/')
  @ApiOperation({ summary: 'Get all products' })
  @ApiQuery({ name: 'name', description: 'Filter products by name' })
  @ApiQuery({ name: 'category', description: 'Filter products by category' })
  @ApiResponse({ status: 200, description: 'Returns all products.' })
  async getProducts(@Query() filterProductDTO: FilterProductDTO) {
    if (Object.keys(filterProductDTO).length) {
      const filteredProducts = await this.productService.getFilteredProducts(
        filterProductDTO,
      );
      return filteredProducts;
    } else {
      const allProducts = await this.productService.getAllProducts();
      return allProducts;
    }
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get a product by ID' })
  @ApiParam({ name: 'id', description: 'Product ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns the product.',
    type: CreateProductDTO,
  })
  @ApiNotFoundResponse({ description: 'Product does not exist.' })
  async getProduct(@Param('id') id: string) {
    const product = await this.productService.getProduct(id);
    if (!product) {
      throw new NotFoundException('Product does not exist!');
    }
    return product;
  }

  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  @Post('/')
  @ApiOperation({ summary: 'Add a new product' })
  @ApiResponse({
    status: 201,
    description: 'Returns the newly added product.',
    type: CreateProductDTO,
  })
  async addProduct(@Body() createProductDTO: CreateProductDTO) {
    const product = await this.productService.addProduct(createProductDTO);
    return product;
  }

  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  @Put('/:id')
  @ApiOperation({ summary: 'Update a product by ID' })
  @ApiParam({ name: 'id', description: 'Product ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns the updated product.',
    type: CreateProductDTO,
  })
  @ApiNotFoundResponse({ description: 'Product does not exist.' })
  async updateProduct(
    @Param('id') id: string,
    @Body() createProductDTO: CreateProductDTO,
  ) {
    const product = await this.productService.updateProduct(
      id,
      createProductDTO,
    );
    if (!product) {
      throw new NotFoundException('Product does not exist!');
    }
    return product;
  }

  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  @Delete('/:id')
  @ApiOperation({ summary: 'Delete a product by ID' })
  @ApiParam({ name: 'id', description: 'Product ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns the deleted product.',
    type: CreateProductDTO,
  })
  @ApiNotFoundResponse({ description: 'Product does not exist.' })
  async deleteProduct(@Param('id') id: string) {
    const product = await this.productService.deleteProduct(id);
    if (!product) {
      throw new NotFoundException('Product does not exist.');
    }
    return product;
  }
}
